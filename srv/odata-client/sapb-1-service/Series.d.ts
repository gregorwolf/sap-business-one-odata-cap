import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Digit Number.
     * @nullable
     */
    digitNumber?: number;
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
}
/**
 * @deprecated Since v1.6.0. Use [[Series.build]] instead.
 */
export declare function createSeries(json: any): Series;
/**
 * SeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[Series.digitNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    digitNumber: ComplexTypeNumberPropertyField<EntityT>;
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
}
export declare namespace Series {
    function build(json: {
        [keys: string]: FieldType;
    }): Series;
}
//# sourceMappingURL=Series.d.ts.map