import { Moment } from 'moment';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AssetDocumentParams
 */
export interface AssetDocumentParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Cancellation Option.
     * @nullable
     */
    cancellationOption?: ClosingOptionEnum;
    /**
     * Cancellation Date.
     * @nullable
     */
    cancellationDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentParams.build]] instead.
 */
export declare function createAssetDocumentParams(json: any): AssetDocumentParams;
/**
 * AssetDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetDocumentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetDocumentParams> {
    /**
     * Representation of the [[AssetDocumentParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentParams.cancellationOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cancellationOption: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cancellationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of AssetDocumentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AssetDocumentParams {
    /**
     * Metadata information on all properties of the `AssetDocumentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AssetDocumentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDocumentParams;
}
//# sourceMappingURL=AssetDocumentParams.d.ts.map