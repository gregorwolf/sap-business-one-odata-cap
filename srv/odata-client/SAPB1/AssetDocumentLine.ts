/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * AssetDocumentLine
 */
export interface AssetDocumentLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Asset Number.
   * @nullable
   */
  assetNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Account.
   * @nullable
   */
  glAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Lc.
   * @nullable
   */
  totalLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Sc.
   * @nullable
   */
  totalSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * New Asset Number.
   * @nullable
   */
  newAssetNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Partial.
   * @nullable
   */
  partial?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Apc.
   * @nullable
   */
  apc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * New Asset Class.
   * @nullable
   */
  newAssetClass?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AssetDocumentLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetDocumentLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetDocumentLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentLine.assetNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssetNumber', 'Edm.String', true);
  /**
   * Representation of the {@link AssetDocumentLine.glAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true);
  /**
   * Representation of the {@link AssetDocumentLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentLine.totalLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalLC', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentLine.totalFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalFC', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentLine.totalSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalSC', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentLine.depreciationArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationArea',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link AssetDocumentLine.newAssetNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newAssetNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NewAssetNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.partial} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partial: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Partial', BoYesNoEnum, true);
  /**
   * Representation of the {@link AssetDocumentLine.apc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('APC', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetDocumentLine.newAssetClass} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newAssetClass: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NewAssetClass', 'Edm.String', true);
  /**
   * Representation of the {@link AssetDocumentLine.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentLine.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);

  /**
   * Creates an instance of AssetDocumentLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AssetDocumentLine, fieldOptions);
  }
}

export namespace AssetDocumentLine {
  /**
   * Metadata information on all properties of the `AssetDocumentLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentLine>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AssetNumber',
      name: 'assetNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLAccount',
      name: 'glAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Quantity',
      name: 'quantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalLC',
      name: 'totalLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalFC',
      name: 'totalFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalSC',
      name: 'totalSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DepreciationArea',
      name: 'depreciationArea',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NewAssetNumber',
      name: 'newAssetNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Partial',
      name: 'partial',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'APC',
      name: 'apc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NewAssetClass',
      name: 'newAssetClass',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule2',
      name: 'distributionRule2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule3',
      name: 'distributionRule3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule4',
      name: 'distributionRule4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DistributionRule5',
      name: 'distributionRule5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Project',
      name: 'project',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
