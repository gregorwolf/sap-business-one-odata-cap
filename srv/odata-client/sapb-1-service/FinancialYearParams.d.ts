import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FinancialYearParams
 */
export interface FinancialYearParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FinancialYearParams.build]] instead.
 */
export declare function createFinancialYearParams(json: any): FinancialYearParams;
/**
 * FinancialYearParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FinancialYearParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FinancialYearParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FinancialYearParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FinancialYearParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FinancialYearParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FinancialYearParams;
}
//# sourceMappingURL=FinancialYearParams.d.ts.map