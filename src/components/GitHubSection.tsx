import React, { useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Github, Star, GitFork, BookOpen, Users, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export const GitHubSection: React.FC = () => {
  const [username, setUsername] = useState<string>(developerProfile.githubUsername || 'saranshnimje');
  const [currentSearch, setCurrentSearch] = useState<string>(username);
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubData = async (userToFetch: string) => {
    if (!userToFetch.trim()) {
      setError('Please provide a valid GitHub username.');
      setIsLoading(false);
      setUserData(null);
      setRepos([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(userToFetch)}`);
      
      if (userRes.status === 404) {
        throw new Error(`GitHub user "${userToFetch}" not found.`);
      }
      if (userRes.status === 403) {
        throw new Error('GitHub API rate limit exceeded for unauthenticated requests. Please wait a few minutes.');
      }
      if (!userRes.ok) {
        throw new Error(`GitHub API error (${userRes.status}).`);
      }

      const userDataParsed: GitHubUser = await userRes.json();
      setUserData(userDataParsed);

      // Fetch top recent repositories
      const reposRes = await fetch(
        `https://api.github.com/users/${encodeURIComponent(userToFetch)}/repos?sort=updated&per_page=6`
      );

      if (reposRes.ok) {
        const reposData: GitHubRepo[] = await reposRes.json();
        setRepos(reposData);
      } else {
        setRepos([]);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch GitHub statistics.');
      setUserData(null);
      setRepos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData(username);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSearch.trim()) {
      setUsername(currentSearch.trim());
      fetchGitHubData(currentSearch.trim());
    }
  };

  return (
    <section id="github" className="py-20 border-b border-slate-800/60 bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-lime-400 mb-2 uppercase tracking-wider">
              <span>Section 06</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Open Source Verification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Github className="w-8 h-8 text-white" />
              Live GitHub Telemetry
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Authentic open-source telemetry fetched live via the GitHub REST API. No simulated commits or vanity stats.
            </p>
          </div>

          {/* Real Handle Test Form */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500">
                github.com/
              </span>
              <input
                type="text"
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
                placeholder="username"
                className="pl-24 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-lime-400 w-52"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-lg transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Query</span>
            </button>
          </form>
        </div>

        {/* State Handling: Loading, Error, or Data */}
        {isLoading ? (
          <div className="p-16 text-center rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="w-8 h-8 text-lime-400 animate-spin" />
            <div className="text-sm font-mono text-slate-400">
              Querying api.github.com for live telemetry...
            </div>
          </div>
        ) : error ? (
          <div className="p-10 rounded-2xl bg-amber-950/20 border border-amber-800/50 flex flex-col items-center text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-white">GitHub API Notice</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {error}
            </p>
            <p className="text-xs text-slate-500">
              Set your valid GitHub handle in <code className="font-mono text-slate-400">/src/data/portfolioData.ts</code>.
            </p>
          </div>
        ) : userData ? (
          <div className="space-y-8">
            {/* User Overview Profile Card */}
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl border border-slate-700 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {userData.name || userData.login}
                    </h3>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-lime-400 hover:underline flex items-center gap-0.5"
                    >
                      @{userData.login}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {userData.bio && (
                    <p className="text-xs text-slate-300 mt-1 max-w-md">
                      {userData.bio}
                    </p>
                  )}
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    GitHub Member Since {new Date(userData.created_at).getFullYear()}
                  </div>
                </div>
              </div>

              {/* Real Metrics Strip (Tabular numbers, unboxed) */}
              <div className="flex items-center gap-6 sm:gap-8 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-8">
                <div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums">
                    {userData.public_repos}
                  </div>
                  <div className="text-xs text-slate-400">Public Repos</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-lime-400 tabular-nums">
                    {userData.followers}
                  </div>
                  <div className="text-xs text-slate-400">Followers</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-cyan-400 tabular-nums">
                    {userData.following}
                  </div>
                  <div className="text-xs text-slate-400">Following</div>
                </div>
              </div>
            </div>

            {/* Repositories Grid */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Recent Public Repositories (Verified on GitHub)
              </h3>

              {repos.length === 0 ? (
                <div className="p-8 text-center rounded-xl bg-slate-900/30 border border-slate-800 text-xs text-slate-400">
                  No public repositories found for this account.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-[#0c101a] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors truncate">
                            {repo.name}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-lime-400 shrink-0" />
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                          {repo.description || 'No description provided.'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                        {repo.language ? (
                          <span className="text-lime-400">{repo.language}</span>
                        ) : (
                          <span className="text-slate-600">Misc</span>
                        )}

                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 tabular-nums">
                            <Star className="w-3 h-3 text-amber-400" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 tabular-nums">
                            <GitFork className="w-3 h-3 text-slate-500" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
