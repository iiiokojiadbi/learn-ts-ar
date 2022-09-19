import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions): ResolveOptions {


  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.srs, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}