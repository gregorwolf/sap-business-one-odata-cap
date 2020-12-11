import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AssetClassLine
 */
export interface AssetClassLine {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Depreciation Area Id.
     * @nullable
     */
    depreciationAreaId?: string;
    /**
     * Active Status.
     * @nullable
     */
    activeStatus?: BoYesNoEnum;
    /**
     * Account Determination.
     * @nullable
     */
    accountDetermination?: string;
    /**
     * Depreciation Type Id.
     * @nullable
     */
    depreciationTypeId?: string;
    /**
     * Use Life.
     * @nullable
     */
    useLife?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[AssetClassLine.build]] instead.
 */
export declare function createAssetClassLine(json: any): AssetClassLine;
/**
 * AssetClassLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetClassLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetClassLine> {
    /**
     * Representation of the [[AssetClassLine.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.depreciationAreaId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationAreaId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.activeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.accountDetermination]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountDetermination: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.depreciationTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationTypeId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassLine.useLife]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useLife: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of AssetClassLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AssetClassLine {
    /**
     * Metadata information on all properties of the `AssetClassLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AssetClassLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AssetClassLine;
}
//# sourceMappingURL=AssetClassLine.d.ts.map