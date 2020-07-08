import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WithholdingTaxCodesValueRange_Line
 */
export interface WithholdingTaxCodesValueRange_Line {
    /**
     * Value From.
     * @nullable
     */
    valueFrom?: number;
    /**
     * W Tax To Be Deductible.
     * @nullable
     */
    wTaxToBeDeductible?: number;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodesValueRange_Line.build]] instead.
 */
export declare function createWithholdingTaxCodesValueRange_Line(json: any): WithholdingTaxCodesValueRange_Line;
/**
 * WithholdingTaxCodesValueRange_LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxCodesValueRange_LineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WithholdingTaxCodesValueRange_Line.valueFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    valueFrom: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesValueRange_Line.wTaxToBeDeductible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxToBeDeductible: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxCodesValueRange_Line.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace WithholdingTaxCodesValueRange_Line {
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxCodesValueRange_Line;
}
//# sourceMappingURL=WithholdingTaxCodesValueRange_Line.d.ts.map