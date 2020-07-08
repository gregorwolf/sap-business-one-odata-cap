/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createAssetDocumentLine(json: any): AssetDocumentLine {
  return AssetDocumentLine.build(json);
}

/**
 * AssetDocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AssetDocumentLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentLine.assetNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AssetNumber', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.glAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccount', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[AssetDocumentLine.totalLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalLC', this, 'Edm.Double');
  /**
   * Representation of the [[AssetDocumentLine.totalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[AssetDocumentLine.totalSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalSC', this, 'Edm.Double');
  /**
   * Representation of the [[AssetDocumentLine.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.newAssetNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newAssetNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NewAssetNumber', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.apc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('APC', this, 'Edm.Double');
  /**
   * Representation of the [[AssetDocumentLine.newAssetClass]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newAssetClass: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NewAssetClass', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
}

export namespace AssetDocumentLine {
  export function build(json: { [keys: string]: FieldType }): AssetDocumentLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      AssetNumber: (assetNumber: string) => ({ assetNumber: edmToTs(assetNumber, 'Edm.String') }),
      GLAccount: (glAccount: string) => ({ glAccount: edmToTs(glAccount, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      TotalLC: (totalLc: number) => ({ totalLc: edmToTs(totalLc, 'Edm.Double') }),
      TotalFC: (totalFc: number) => ({ totalFc: edmToTs(totalFc, 'Edm.Double') }),
      TotalSC: (totalSc: number) => ({ totalSc: edmToTs(totalSc, 'Edm.Double') }),
      DepreciationArea: (depreciationArea: string) => ({ depreciationArea: edmToTs(depreciationArea, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      NewAssetNumber: (newAssetNumber: string) => ({ newAssetNumber: edmToTs(newAssetNumber, 'Edm.String') }),
      APC: (apc: number) => ({ apc: edmToTs(apc, 'Edm.Double') }),
      NewAssetClass: (newAssetClass: string) => ({ newAssetClass: edmToTs(newAssetClass, 'Edm.String') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') })
    });
  }
}
