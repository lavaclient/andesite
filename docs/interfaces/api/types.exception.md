[andesitejs](../../README.md) / [Exports](../../modules.md) / [api/types](../../modules/api_types.md) / Exception

# Interface: Exception

[api/types](../../modules/api_types.md).Exception

## Hierarchy

* **Exception**

## Table of contents

### Properties

- [cause](types.exception.md#cause)
- [class](types.exception.md#class)
- [message](types.exception.md#message)
- [stack](types.exception.md#stack)
- [suppressed](types.exception.md#suppressed)

## Properties

### cause

• **cause**: *null* \| [*Exception*](types.exception.md)

Cause of the error.

Defined in: [api/types.ts:433](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L433)

___

### class

• **class**: *string*

Class of the error.

Defined in: [api/types.ts:418](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L418)

___

### message

• **message**: *null* \| *string*

Message of the error.

Defined in: [api/types.ts:423](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L423)

___

### stack

• **stack**: [*StackFrame*](types.stackframe.md)

Stacktrace of the error.

Defined in: [api/types.ts:428](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L428)

___

### suppressed

• **suppressed**: [*Exception*](types.exception.md)[]

Suppressed errors.

Defined in: [api/types.ts:438](https://github.com/Lavaclient/andesite/blob/7241e28/src/api/types.ts#L438)
