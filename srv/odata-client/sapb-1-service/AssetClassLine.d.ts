import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class AssetClassLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace AssetClassLine {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetClassLine;
}
//# sourceMappingURL=AssetClassLine.d.ts.map