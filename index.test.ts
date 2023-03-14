import { describe, it, expect, assert } from 'vitest';
import {add} from './index'

describe('add', () => {
    expect(add(1,2)).toBe(3)
})