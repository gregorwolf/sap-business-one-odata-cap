import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * IntegrationPackageParams
 */
export interface IntegrationPackageParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[IntegrationPackageParams.build]] instead.
 */
export declare function createIntegrationPackageParams(json: any): IntegrationPackageParams;
/**
 * IntegrationPackageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IntegrationPackageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IntegrationPackageParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace IntegrationPackageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): IntegrationPackageParams;
}
//# sourceMappingURL=IntegrationPackageParams.d.ts.map