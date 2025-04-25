module.exports = {
  ci: {
    collect: {
      // コマンドを実行する前に存在する可能性のある古いサーバープロセスを強制終了します
      // startServerCommand: 'pnpm start --port=3000',
      // Next.js 13+ では、サーバーの準備ができたことを示す特定のログメッセージを待つ必要がある場合があります
      // startServerReadyPattern: 'ready - started server on',
      // startServerReadyTimeout: 120000, // タイムアウトを延長 (ミリ秒)
      startServerCommand: 'pnpm start',
      url: ['http://localhost:3000/', 'http://localhost:3000/blog'],
      numberOfRuns: 3, // 安定した結果を得るために複数回実行
    },
    assert: {
      preset: 'lighthouse:recommended', // 推奨プリセットを使用
      assertions: {
        // 必要に応じて特定のアサーションをオーバーライド
        // 例: 'categories:performance': ['warn', {minScore: 0.9}],
        //     'categories:accessibility': ['error', {minScore: 1}],
        //     // Service WorkerはPWAでない限り不要な場合が多い
        //     'service-worker': 'off',
        //     // robots.txtはCI環境では検証が難しい場合がある
        //     'robots-txt': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage', // レポートを一時的なパブリックストレージにアップロード
    },
  },
};
