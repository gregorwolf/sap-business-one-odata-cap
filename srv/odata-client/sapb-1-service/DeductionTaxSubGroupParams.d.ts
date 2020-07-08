import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DeductionTaxSubGroupParams
 */
export interface DeductionTaxSubGroupParams {
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: string;
    /**
     * Group Name.
     * @nullable
     */
    groupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxSubGroupParams.build]] instead.
 */
export declare function createDeductionTaxSubGroupParams(json: any): DeductionTaxSubGroupParams;
/**
 * DeductionTaxSubGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeductionTaxSubGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DeductionTaxSubGroupParams.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DeductionTaxSubGroupParams.groupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DeductionTaxSubGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DeductionTaxSubGroupParams;
}
//# sourceMappingURL=DeductionTaxSubGroupParams.d.ts.map