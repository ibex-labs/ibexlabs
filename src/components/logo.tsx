import {Tooltip} from "@mui/material";
import * as React from "react";

import {ReactComponent as TSLogo} from "../assets/typescript.svg";
import {ReactComponent as RustLogo} from "../assets/rust.svg";
import {ReactComponent as PG} from "../assets/postgresql.svg";
import {ReactComponent as SB} from "../assets/supabase-logo-icon.svg";
import {ReactComponent as VercelLogo} from "../assets/vercel.svg";
import {ReactComponent as SolanaLogo} from "../assets/solana.svg";
import {ReactComponent as RedisLogo} from "../assets/redis.svg";
import {ReactComponent as DenoLogo} from "../assets/deno.svg";

export const TS = (props: any) => <Tooltip title={'Typescript'} {...props}><TSLogo/></Tooltip>;
export const Postgres = (props: any) => <Tooltip title={'PostgreSQL'} {...props}><PG/></Tooltip>;

export const Supabase = (props: any) => <Tooltip title={'Supabase'} {...props}><SB/></Tooltip>;
export const Vercel = (props: any) => <Tooltip title={'Vercel'} {...props}><VercelLogo/></Tooltip>
export const Solana = (props: any) => <Tooltip title={'Solana'} {...props}><SolanaLogo/></Tooltip>
export const Redis = (props: any) => <Tooltip title={'Redis'} {...props}><RedisLogo/></Tooltip>
export const Rust = (props: any) => <Tooltip title={'Rust'} {...props}><RustLogo/></Tooltip>

export const Deno = (props: any) => <Tooltip title={'Deno'} {...props}><DenoLogo/></Tooltip>