import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InvokeParams
 */
export interface InvokeParams {
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[InvokeParams.build]] instead.
 */
export declare function createInvokeParams(json: any): InvokeParams;
/**
 * InvokeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InvokeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InvokeParams.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace InvokeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): InvokeParams;
}
//# sourceMappingURL=InvokeParams.d.ts.map