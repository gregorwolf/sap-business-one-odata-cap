import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WithholdingTaxLine
 */
export interface WithholdingTaxLine {
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
    /**
     * Cst Code Incoming.
     * @nullable
     */
    cstCodeIncoming?: string;
    /**
     * Cst Code Outgoing.
     * @nullable
     */
    cstCodeOutgoing?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxLine.build]] instead.
 */
export declare function createWithholdingTaxLine(json: any): WithholdingTaxLine;
/**
 * WithholdingTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WithholdingTaxLine.wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.wtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.withholdingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.taxableAmountinSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.taxableAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.taxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.roundingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roundingType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.criteria]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    criteria: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.appliedWtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.appliedWtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.appliedWtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.baseDocEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.baseDocLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.baseDocType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.baseDocumentReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocumentReference: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.targetAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.targetDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetDocumentType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.cstCodeIncoming]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cstCodeIncoming: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxLine.cstCodeOutgoing]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cstCodeOutgoing: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WithholdingTaxLine {
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxLine;
}
//# sourceMappingURL=WithholdingTaxLine.d.ts.map