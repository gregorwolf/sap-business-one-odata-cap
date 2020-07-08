import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExternalCallParams
 */
export interface ExternalCallParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalCallParams.build]] instead.
 */
export declare function createExternalCallParams(json: any): ExternalCallParams;
/**
 * ExternalCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalCallParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExternalCallParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ExternalCallParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ExternalCallParams;
}
//# sourceMappingURL=ExternalCallParams.d.ts.map