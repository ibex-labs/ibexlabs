import {Tooltip} from "@mui/material";
import * as React from "react";

import {ReactComponent as TSLogo} from "../assets/typescript.svg";
import {ReactComponent as RustLogo} from "../assets/rust.svg";
import {ReactComponent as PG} from "../assets/postgresql.svg";
import {ReactComponent as SB} from "../assets/supabase-logo-icon.svg";
import {ReactComponent as VercelLogo} from "../assets/vercel-white.svg";
import {ReactComponent as SolanaLogo} from "../assets/solana.svg";
import {ReactComponent as RedisLogo} from "../assets/redis.svg";
import {ReactComponent as DenoLogo} from "../assets/deno.svg";
import {ReactComponent as GoLogo} from "../assets/gopher.svg";
import {ReactComponent as PythonLogo} from "../assets/python.svg";
import {ReactComponent as ScalaLogo} from "../assets/scala.svg";

import {ReactComponent as TSFullLogo} from "../assets/typescript-full.svg";
import {ReactComponent as RustFullLogo} from "../assets/rust-full.svg";
//import {ReactComponent as PGFullLogo} from "../assets/postgresql-full.svg";
import {ReactComponent as SBFull} from "../assets/supabase-full.svg";
//import {ReactComponent as VercelLogo} from "../assets/vercel.svg";
//import {ReactComponent as SolanaLogo} from "../assets/solana.svg";
import {ReactComponent as RedisFullLogo} from "../assets/redis-full.svg";
//import {ReactComponent as DenoLogo} from "../assets/deno.svg";
import {ReactComponent as GoFullLogo} from "../assets/golang-full.svg";
import {ReactComponent as PythonFullLogo} from "../assets/python-full.svg";
import {ReactComponent as ScalaFullLogo} from "../assets/scala-full-white.svg";
import {ReactComponent as HaskellLogo} from "../assets/haskell.svg";
import {ReactComponent as HaskellFullLogo} from "../assets/haskell-full.svg";
import {ReactComponent as ClojureLogo} from "../assets/clojure.svg";
import {ReactComponent as ClojureFullLogo} from "../assets/clojure-full.svg";
import {ReactComponent as KubernetesLogo} from "../assets/kubernetes.svg";
import {ReactComponent as DockerLogo} from "../assets/docker.svg";
import {ReactComponent as GrafanaLogo} from "../assets/grafana.svg";
import {ReactComponent as PrometheusLogo} from "../assets/prometheus.svg";
import {ReactComponent as RenderLogo} from "../assets/render.svg";
import {ReactComponent as RenderLogo1} from "../assets/render1.svg";
import {ReactComponent as RustWhiteLogo} from "../assets/rust-white.svg";
import {ReactComponent as RenderFoundationLogo} from "../assets/render-foundation.svg";
import {Image} from "mui-image";

export const TS = (props: any) => <Tooltip title={'Typescript'} {...props}><TSLogo/></Tooltip>;
export const TSFull = (props: any) => <Tooltip title={'Typescript'} {...props}><TSFullLogo/></Tooltip>;
export const Postgres = (props: any) => <Tooltip title={'PostgreSQL'} {...props}><PG/></Tooltip>;
export const PostgresFull = (props: any) => <Tooltip title={'PostgreSQL'} {...props}><PG/></Tooltip>;

export const Supabase = (props: any) => <Tooltip title={'Supabase'} {...props}><SB/></Tooltip>;
export const Vercel = (props: any) => <Tooltip title={'Vercel'} {...props}><VercelLogo/></Tooltip>
export const Solana = (props: any) => <Tooltip title={'Solana'} {...props}><SolanaLogo/></Tooltip>
export const Redis = (props: any) => <Tooltip title={'Redis'} {...props}><RedisLogo/></Tooltip>
export const Rust = (props: any) => <Tooltip title={'Rust'} {...props}><RustLogo/></Tooltip>
export const RustFull = (props: any) => <Tooltip title={'Rust'} {...props}><RustFullLogo/></Tooltip>
export const Deno = (props: any) => <Tooltip title={'Deno'} {...props}><DenoLogo/></Tooltip>
export const Go = (props: any) => <Tooltip title={'Golang'} {...props}><GoLogo/></Tooltip>
export const GoFull = (props: any) => <Tooltip title={'Golang'} {...props}><GoFullLogo/></Tooltip>
export const Python = (props: any) => <Tooltip title={'Python'} {...props}><PythonLogo/></Tooltip>
export const PythonFull = (props: any) => <Tooltip title={'Python'} {...props}><PythonFullLogo/></Tooltip>
export const Scala = (props: any) => <Tooltip title={'Scala'} {...props}><ScalaLogo/></Tooltip>
export const ScalaFull = (props: any) => <Tooltip title={'Scala'} {...props}><ScalaFullLogo/></Tooltip>
export const Haskell = (props: any) => <Tooltip title={'Haskell'} {...props}><HaskellLogo/></Tooltip>
export const HaskellFull = (props: any) => <Tooltip title={'Haskell'} {...props}><HaskellFullLogo/></Tooltip>
export const Clojure = (props: any) => <Tooltip title={'Clojure'} {...props}><ClojureLogo/></Tooltip>
export const ClojureFull = (props: any) => <Tooltip title={'Clojure'} {...props}><ClojureFullLogo/></Tooltip>
export const Kubernetes = (props: any) => <Tooltip title={'Kubernetes'} {...props}><KubernetesLogo/></Tooltip>
export const Docker = (props: any) => <Tooltip title={'Docker'} {...props}><DockerLogo/></Tooltip>
export const Grafana = (props: any) => <Tooltip title={'Grafana'} {...props}><GrafanaLogo/></Tooltip>
export const Prometheus = (props: any) => <Tooltip title={'Prometheus'} {...props}><PrometheusLogo/></Tooltip>
export const Render = (props: any) => <Tooltip title={'Render'} {...props}><RenderLogo/></Tooltip>
export const Render1 = (props: any) => <Tooltip title={'Render'} {...props}><RenderLogo1/></Tooltip>

export const Rust1 = (props: any) => <Tooltip title={'Rust'} {...props}><RustWhiteLogo/></Tooltip>
export const RenderFoundation = (props: any) => <Tooltip title={'Render Foundation'} {...props}><RenderFoundationLogo/></Tooltip>