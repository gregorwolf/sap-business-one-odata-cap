/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * AssetRevaluationLine
 */
export interface AssetRevaluationLine<
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
   * Current Nbv.
   * @nullable
   */
  currentNbv?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * New Nbv.
   * @nullable
   */
  newNbv?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Revaluation Percent.
   * @nullable
   */
  revaluationPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
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
 * AssetRevaluationLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetRevaluationLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetRevaluationLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetRevaluationLine.docEntry} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.lineNumber} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.assetNumber} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.currentNbv} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currentNbv: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurrentNBV', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetRevaluationLine.newNbv} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newNbv: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NewNBV', 'Edm.Double', true);
  /**
   * Representation of the {@link AssetRevaluationLine.remarks} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.revaluationPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revaluationPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevaluationPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link AssetRevaluationLine.distributionRule} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.distributionRule2} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.distributionRule3} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.distributionRule4} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.distributionRule5} property for query construction.
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
   * Representation of the {@link AssetRevaluationLine.project} property for query construction.
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
   * Creates an instance of AssetRevaluationLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      AssetRevaluationLine,
      fieldOptions
    );
  }
}

export namespace AssetRevaluationLine {
  /**
   * Metadata information on all properties of the `AssetRevaluationLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetRevaluationLine>[] = [
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
      originalName: 'CurrentNBV',
      name: 'currentNbv',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'NewNBV',
      name: 'newNbv',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RevaluationPercent',
      name: 'revaluationPercent',
      type: 'Edm.Double',
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
