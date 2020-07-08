import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BatchNumberDetailParams
 */
export interface BatchNumberDetailParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BatchNumberDetailParams.build]] instead.
 */
export declare function createBatchNumberDetailParams(json: any): BatchNumberDetailParams;
/**
 * BatchNumberDetailParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BatchNumberDetailParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BatchNumberDetailParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BatchNumberDetailParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BatchNumberDetailParams;
}
//# sourceMappingURL=BatchNumberDetailParams.d.ts.map