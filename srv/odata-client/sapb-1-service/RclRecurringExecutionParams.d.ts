import { ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * RclRecurringExecutionParams
 */
export interface RclRecurringExecutionParams {
}
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringExecutionParams.build]] instead.
 */
export declare function createRclRecurringExecutionParams(json: any): RclRecurringExecutionParams;
/**
 * RclRecurringExecutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RclRecurringExecutionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}
export declare namespace RclRecurringExecutionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RclRecurringExecutionParams;
}
//# sourceMappingURL=RclRecurringExecutionParams.d.ts.map