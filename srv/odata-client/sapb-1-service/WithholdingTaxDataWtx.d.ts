import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WithholdingTaxDataWtx
 */
export interface WithholdingTaxDataWtx {
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
     * Rate.
     * @nullable
     */
    rate?: number;
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
    baseDocType?: string;
    /**
     * Wt Abs Id.
     * @nullable
     */
    wtAbsId?: string;
    /**
     * Exempt Rate.
     * @nullable
     */
    exemptRate?: number;
    /**
     * Base Net Amount Sys.
     * @nullable
     */
    baseNetAmountSys?: number;
    /**
     * Base Net Amount Fc.
     * @nullable
     */
    baseNetAmountFc?: number;
    /**
     * Base Net Amount.
     * @nullable
     */
    baseNetAmount?: number;
    /**
     * Base Vatmount Sys.
     * @nullable
     */
    baseVatmountSys?: number;
    /**
     * Base Vatmount Fc.
     * @nullable
     */
    baseVatmountFc?: number;
    /**
     * Base Vatmount.
     * @nullable
     */
    baseVatmount?: number;
    /**
     * Accum Base Amount Sys.
     * @nullable
     */
    accumBaseAmountSys?: number;
    /**
     * Accum Base Amount Fc.
     * @nullable
     */
    accumBaseAmountFc?: number;
    /**
     * Accum Base Amount.
     * @nullable
     */
    accumBaseAmount?: number;
    /**
     * Accum W Tax Amount Sys.
     * @nullable
     */
    accumWTaxAmountSys?: number;
    /**
     * Accum W Tax Amount Fc.
     * @nullable
     */
    accumWTaxAmountFc?: number;
    /**
     * Accum W Tax Amount.
     * @nullable
     */
    accumWTaxAmount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxDataWtx.build]] instead.
 */
export declare function createWithholdingTaxDataWtx(json: any): WithholdingTaxDataWtx;
/**
 * WithholdingTaxDataWtxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WithholdingTaxDataWtxField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WithholdingTaxDataWtx> {
    /**
     * Representation of the [[WithholdingTaxDataWtx.wtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.withholdingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholdingType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.taxableAmountinSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountinSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.taxableAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.taxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxableAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.appliedWtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    appliedWtAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseDocEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseDocLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseDocType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseDocType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.wtAbsId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtAbsId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.exemptRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exemptRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseNetAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseNetAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseNetAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseNetAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseNetAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseVatmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseVatmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseVatmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseVatmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.baseVatmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseVatmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumBaseAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumBaseAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumBaseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumBaseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumWTaxAmountSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumWTaxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumWTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of WithholdingTaxDataWtxField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WithholdingTaxDataWtx {
    /**
     * Metadata information on all properties of the `WithholdingTaxDataWtx` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WithholdingTaxDataWtx>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WithholdingTaxDataWtx;
}
//# sourceMappingURL=WithholdingTaxDataWtx.d.ts.map