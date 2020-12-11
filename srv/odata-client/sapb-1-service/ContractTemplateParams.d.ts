import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ContractTemplateParams
 */
export interface ContractTemplateParams {
    /**
     * Template Name.
     * @nullable
     */
    templateName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ContractTemplateParams.build]] instead.
 */
export declare function createContractTemplateParams(json: any): ContractTemplateParams;
/**
 * ContractTemplateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContractTemplateParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ContractTemplateParams> {
    /**
     * Representation of the [[ContractTemplateParams.templateName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    templateName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ContractTemplateParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ContractTemplateParams {
    /**
     * Metadata information on all properties of the `ContractTemplateParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ContractTemplateParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ContractTemplateParams;
}
//# sourceMappingURL=ContractTemplateParams.d.ts.map