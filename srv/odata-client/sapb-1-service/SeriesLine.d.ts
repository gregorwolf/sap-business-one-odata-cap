import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class SeriesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace SeriesLine {
    function build(json: {
        [keys: string]: FieldType;
    }): SeriesLine;
}
//# sourceMappingURL=SeriesLine.d.ts.map