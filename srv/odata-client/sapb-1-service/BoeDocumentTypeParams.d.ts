import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BoeDocumentTypeParams
 */
export interface BoeDocumentTypeParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
export declare function createBoeDocumentTypeParams(json: any): BoeDocumentTypeParams;
/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeDocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeDocumentTypeParams> {
    /**
     * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BoeDocumentTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BoeDocumentTypeParams {
    /**
     * Metadata information on all properties of the `BoeDocumentTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BoeDocumentTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BoeDocumentTypeParams;
}
//# sourceMappingURL=BoeDocumentTypeParams.d.ts.map