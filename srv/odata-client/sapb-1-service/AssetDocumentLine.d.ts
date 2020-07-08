import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AssetDocumentLine
 */
export interface AssetDocumentLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Asset Number.
     * @nullable
     */
    assetNumber?: string;
    /**
     * Gl Account.
     * @nullable
     */
    glAccount?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Total Lc.
     * @nullable
     */
    totalLc?: number;
    /**
     * Total Fc.
     * @nullable
     */
    totalFc?: number;
    /**
     * Total Sc.
     * @nullable
     */
    totalSc?: number;
    /**
     * Depreciation Area.
     * @nullable
     */
    depreciationArea?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * New Asset Number.
     * @nullable
     */
    newAssetNumber?: string;
    /**
     * Apc.
     * @nullable
     */
    apc?: number;
    /**
     * New Asset Class.
     * @nullable
     */
    newAssetClass?: string;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
    /**
     * Project.
     * @nullable
     */
    project?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentLine.build]] instead.
 */
export declare function createAssetDocumentLine(json: any): AssetDocumentLine;
/**
 * AssetDocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetDocumentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AssetDocumentLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.assetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assetNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.totalLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.totalSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationArea: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.newAssetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newAssetNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.apc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.newAssetClass]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newAssetClass: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AssetDocumentLine {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDocumentLine;
}
//# sourceMappingURL=AssetDocumentLine.d.ts.map