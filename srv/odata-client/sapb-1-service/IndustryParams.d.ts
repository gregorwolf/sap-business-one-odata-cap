import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * IndustryParams
 */
export interface IndustryParams {
    /**
     * Industry Code.
     * @nullable
     */
    industryCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[IndustryParams.build]] instead.
 */
export declare function createIndustryParams(json: any): IndustryParams;
/**
 * IndustryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IndustryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IndustryParams.industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    industryCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace IndustryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): IndustryParams;
}
//# sourceMappingURL=IndustryParams.d.ts.map