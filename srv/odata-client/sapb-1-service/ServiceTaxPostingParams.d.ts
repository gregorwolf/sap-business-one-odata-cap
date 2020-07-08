import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceTaxPostingParams
 */
export interface ServiceTaxPostingParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceTaxPostingParams.build]] instead.
 */
export declare function createServiceTaxPostingParams(json: any): ServiceTaxPostingParams;
/**
 * ServiceTaxPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceTaxPostingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceTaxPostingParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceTaxPostingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceTaxPostingParams;
}
//# sourceMappingURL=ServiceTaxPostingParams.d.ts.map