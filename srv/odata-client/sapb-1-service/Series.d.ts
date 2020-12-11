import { BoSeriesGroupEnum } from './BoSeriesGroupEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSeriesTypeEnum } from './BoSeriesTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Series
 */
export interface Series {
    /**
     * Document.
     * @nullable
     */
    document?: string;
    /**
     * Document Sub Type.
     * @nullable
     */
    documentSubType?: string;
    /**
     * Initial Number.
     * @nullable
     */
    initialNumber?: number;
    /**
     * Last Number.
     * @nullable
     */
    lastNumber?: number;
    /**
     * Next Number.
     * @nullable
     */
    nextNumber?: number;
    /**
     * Prefix.
     * @nullable
     */
    prefix?: string;
    /**
     * Suffix.
     * @nullable
     */
    suffix?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: BoSeriesGroupEnum;
    /**
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Period Indicator.
     * @nullable
     */
    periodIndicator?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Is Digital Series.
     * @nullable
     */
    isDigitalSeries?: BoYesNoEnum;
    /**
     * Digit Number.
     * @nullable
     */
    digitNumber?: number;
    /**
     * Series Type.
     * @nullable
     */
    seriesType?: BoSeriesTypeEnum;
    /**
     * Is Manual.
     * @nullable
     */
    isManual?: BoYesNoEnum;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * At Document Type.
     * @nullable
     */
    atDocumentType?: string;
    /**
     * Is Electronic Comm Enabled.
     * @nullable
     */
    isElectronicCommEnabled?: BoYesNoEnum;
    /**
     * Cost Account Only.
     * @nullable
     */
    costAccountOnly?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[Series.build]] instead.
 */
export declare function createSeries(json: any): Series;
/**
 * SeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SeriesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Series> {
    /**
     * Representation of the [[Series.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.initialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    initialNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.lastNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.nextNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.prefix]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    prefix: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.suffix]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    suffix: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.locked]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locked: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodIndicator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.isDigitalSeries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isDigitalSeries: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.digitNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    digitNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.seriesType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    seriesType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.isManual]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isManual: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[Series.atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    atDocumentType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Series.isElectronicCommEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isElectronicCommEnabled: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[Series.costAccountOnly]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costAccountOnly: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of SeriesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Series {
    /**
     * Metadata information on all properties of the `Series` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Series>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Series;
}
//# sourceMappingURL=Series.d.ts.map