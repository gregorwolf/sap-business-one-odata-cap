import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PosTotalizer
 */
export interface PosTotalizer {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
export declare function createPosTotalizer(json: any): PosTotalizer;
/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PosTotalizerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PosTotalizer> {
    /**
     * Representation of the [[PosTotalizer.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PosTotalizer.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PosTotalizerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PosTotalizer {
    /**
     * Metadata information on all properties of the `PosTotalizer` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PosTotalizer>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PosTotalizer;
}
//# sourceMappingURL=PosTotalizer.d.ts.map