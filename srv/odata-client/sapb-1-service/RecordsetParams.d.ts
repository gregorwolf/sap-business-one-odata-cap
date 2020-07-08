import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * RecordsetParams
 */
export interface RecordsetParams {
    /**
     * Query.
     * @nullable
     */
    query?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[RecordsetParams.build]] instead.
 */
export declare function createRecordsetParams(json: any): RecordsetParams;
/**
 * RecordsetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RecordsetParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RecordsetParams.query]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    query: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace RecordsetParams {
    function build(json: {
        [keys: string]: FieldType;
    }): RecordsetParams;
}
//# sourceMappingURL=RecordsetParams.d.ts.map