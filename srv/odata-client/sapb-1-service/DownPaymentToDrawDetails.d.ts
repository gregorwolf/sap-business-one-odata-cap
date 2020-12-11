import { BoYesNoEnum } from './BoYesNoEnum';
import { LineTypeEnum } from './LineTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DownPaymentToDrawDetails
 */
export interface DownPaymentToDrawDetails {
    /**
     * Doc Internal Id.
     * @nullable
     */
    docInternalId?: number;
    /**
     * Row Num.
     * @nullable
     */
    rowNum?: number;
    /**
     * Seq Num.
     * @nullable
     */
    seqNum?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Vat Group Code.
     * @nullable
     */
    vatGroupCode?: string;
    /**
     * Vat Percent.
     * @nullable
     */
    vatPercent?: number;
    /**
     * Amount To Draw.
     * @nullable
     */
    amountToDraw?: number;
    /**
     * Amount To Draw Fc.
     * @nullable
     */
    amountToDrawFc?: number;
    /**
     * Amount To Draw Sc.
     * @nullable
     */
    amountToDrawSc?: number;
    /**
     * Tax.
     * @nullable
     */
    tax?: number;
    /**
     * Tax Fc.
     * @nullable
     */
    taxFc?: number;
    /**
     * Tax Sc.
     * @nullable
     */
    taxSc?: number;
    /**
     * Is Gross Line.
     * @nullable
     */
    isGrossLine?: BoYesNoEnum;
    /**
     * Gross Amount To Draw.
     * @nullable
     */
    grossAmountToDraw?: number;
    /**
     * Gross Amount To Draw Fc.
     * @nullable
     */
    grossAmountToDrawFc?: number;
    /**
     * Gross Amount To Draw Sc.
     * @nullable
     */
    grossAmountToDrawSc?: number;
    /**
     * Line Type.
     * @nullable
     */
    lineType?: LineTypeEnum;
    /**
     * Tax Adjust.
     * @nullable
     */
    taxAdjust?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDrawDetails.build]] instead.
 */
export declare function createDownPaymentToDrawDetails(json: any): DownPaymentToDrawDetails;
/**
 * DownPaymentToDrawDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DownPaymentToDrawDetailsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DownPaymentToDrawDetails> {
    /**
     * Representation of the [[DownPaymentToDrawDetails.docInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docInternalId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.rowNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.seqNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    seqNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.vatGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.amountToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDraw: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.amountToDrawFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDrawFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.amountToDrawSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountToDrawSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.tax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.taxFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.taxSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.isGrossLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isGrossLine: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.grossAmountToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDraw: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDrawFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmountToDrawSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.lineType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DownPaymentToDrawDetails.taxAdjust]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAdjust: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of DownPaymentToDrawDetailsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DownPaymentToDrawDetails {
    /**
     * Metadata information on all properties of the `DownPaymentToDrawDetails` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DownPaymentToDrawDetails>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DownPaymentToDrawDetails;
}
//# sourceMappingURL=DownPaymentToDrawDetails.d.ts.map