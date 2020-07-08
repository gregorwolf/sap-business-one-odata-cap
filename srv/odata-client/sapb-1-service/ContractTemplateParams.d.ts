import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ContractTemplateParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ContractTemplateParams.templateName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    templateName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ContractTemplateParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ContractTemplateParams;
}
//# sourceMappingURL=ContractTemplateParams.d.ts.map