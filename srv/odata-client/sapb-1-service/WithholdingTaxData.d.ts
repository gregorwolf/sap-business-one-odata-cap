import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WithholdingTaxData
 */
export interface WithholdingTaxData {
    /**
     * Wt Code.
     * @nullable
     */
    wtCode?: string;
    /**
     * Wt Amount Sys.
     * @nullable
     */
    wtAmountSys?: number;
    /**
     * Wt Amount Fc.
     * @nullable
     */
    wtAmountFc?: number;
    /**
     * Wt Amount.
     * @nullable
     */
    wtAmount?: number;
    /**
     * Withholding Type.
     * @nullable
     */
    withholdingType?: string;
    /**
     * Taxable Amountin Sys.
     * @nullable
     */
    taxableAmountinSys?: number;
    /**
     * Taxable Amount Fc.
     * @nullable
     */
    taxableAmountFc?: number;
    /**
     * Taxable Amount.
     * @nullable
     */
    taxableAmount?: number;
    /**
     * Rounding Type.
     * @nullable
     */
    roundingType?: string;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Criteria.
     * @nullable
     */
    criteria?: string;
    /**
     * Category.
     * @nullable
     */
    category?: string;
    /**
     * Base Type.
     * @nullable
     */
    baseType?: string;
    /**
     * Applied Wt Amount Sys.
     * @nullable
     */
    appliedWtAmountSys?: number;
    /**
     * Applied Wt Amount Fc.
     * @nullable
     */
    appliedWtAmountFc?: number;
    /**
     * Applied Wt Amount.
     * @nullable
     */
    appliedWtAmount?: number;
    /**
     * Gl Account.
     * @nullable
     */
    glAccount?: string;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Base Doc Entry.
     * @nullable
     */
    baseDocEntry?: number;
    /**
     * Base Doc Line.
     * @nullable
     */
    baseDocLine?: number;
    /**
     * Base Doc Type.
     * @nullable
     */
    baseDocType?: number;
    /**
     * Base Document Reference.
     * @nullable
     */
    baseDocumentReference?: number;
    /**
     * Target Abs Entry.
     * @nullable
     */
    targetAbsEntry?: number;
    /**
     * Target Document Type.
     * @nullable
     */
    targetDocumentType?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxData.build]] instead.
 */
export declare function createWithholdingTaxData(json: any): WithholdingTaxData;
/**
 * WithholdingTaxDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WithholdingTaxData.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.wtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.withholdingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.taxableAmountinSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.taxableAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.taxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.roundingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roundingType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.criteria]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    criteria: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.appliedWtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.appliedWtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.appliedWtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.baseDocEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.baseDocLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.baseDocType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.baseDocumentReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentReference: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.targetAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxData.targetDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetDocumentType: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace WithholdingTaxData {
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxData;
}
//# sourceMappingURL=WithholdingTaxData.d.ts.map