/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Partial.
   * @nullable
   */
  partial?: BoYesNoEnum;
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
export class AssetDocumentLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetDocumentLine> {
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
   * Representation of the [[AssetDocumentLine.partial]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partial: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Partial', this);
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

  /**
   * Creates an instance of AssetDocumentLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AssetDocumentLine);
  }
}

export namespace AssetDocumentLine {
  /**
   * Metadata information on all properties of the `AssetDocumentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AssetNumber',
    name: 'assetNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GLAccount',
    name: 'glAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalLC',
    name: 'totalLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalFC',
    name: 'totalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalSC',
    name: 'totalSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DepreciationArea',
    name: 'depreciationArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NewAssetNumber',
    name: 'newAssetNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Partial',
    name: 'partial',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'APC',
    name: 'apc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'NewAssetClass',
    name: 'newAssetClass',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AssetDocumentLine {
    return deserializeComplexTypeV4(json, AssetDocumentLine);
  }
}
