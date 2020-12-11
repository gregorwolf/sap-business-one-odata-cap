import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SeriesLine
 */
export interface SeriesLine {
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Prefix.
     * @nullable
     */
    prefix?: string;
    /**
     * First Num.
     * @nullable
     */
    firstNum?: number;
    /**
     * Next Num.
     * @nullable
     */
    nextNum?: number;
    /**
     * Last Num.
     * @nullable
     */
    lastNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SeriesLine.build]] instead.
 */
export declare function createSeriesLine(json: any): SeriesLine;
/**
 * SeriesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SeriesLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SeriesLine> {
    /**
     * Representation of the [[SeriesLine.series]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    series: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SeriesLine.prefix]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    prefix: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SeriesLine.firstNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SeriesLine.nextNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SeriesLine.lastNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SeriesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SeriesLine {
    /**
     * Metadata information on all properties of the `SeriesLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SeriesLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SeriesLine;
}
//# sourceMappingURL=SeriesLine.d.ts.map