import { Moment } from 'moment';
import { BlanketAgreementDatePeriodsEnum } from './BlanketAgreementDatePeriodsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BlanketAgreementsDetailsLine
 */
export interface BlanketAgreementsDetailsLine {
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
    /**
     * Agreement Row Number.
     * @nullable
     */
    agreementRowNumber?: number;
    /**
     * Agreement Effective Row Number.
     * @nullable
     */
    agreementEffectiveRowNumber?: number;
    /**
     * Frequency.
     * @nullable
     */
    frequency?: BlanketAgreementDatePeriodsEnum;
    /**
     * From.
     * @nullable
     */
    from?: Moment;
    /**
     * To.
     * @nullable
     */
    to?: Moment;
    /**
     * Release Information.
     * @nullable
     */
    releaseInformation?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Free Text.
     * @nullable
     */
    freeText?: string;
    /**
     * Consume Sales Forecast.
     * @nullable
     */
    consumeSalesForecast?: BoYesNoEnum;
    /**
     * Planned Amount Lc.
     * @nullable
     */
    plannedAmountLc?: number;
    /**
     * Planned Amount Fc.
     * @nullable
     */
    plannedAmountFc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDetailsLine.build]] instead.
 */
export declare function createBlanketAgreementsDetailsLine(json: any): BlanketAgreementsDetailsLine;
/**
 * BlanketAgreementsDetailsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementsDetailsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsDetailsLine> {
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementEffectiveRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementEffectiveRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.frequency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    frequency: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.from]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    from: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.to]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    to: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.releaseInformation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    releaseInformation: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.freeText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.consumeSalesForecast]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    consumeSalesForecast: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BlanketAgreementsDetailsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BlanketAgreementsDetailsLine {
    /**
     * Metadata information on all properties of the `BlanketAgreementsDetailsLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BlanketAgreementsDetailsLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementsDetailsLine;
}
//# sourceMappingURL=BlanketAgreementsDetailsLine.d.ts.map