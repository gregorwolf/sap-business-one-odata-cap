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
 * AssetClassLine
 */
export interface AssetClassLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depreciation Area Id.
   * @nullable
   */
  depreciationAreaId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Active Status.
   * @nullable
   */
  activeStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Account Determination.
   * @nullable
   */
  accountDetermination?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Depreciation Type Id.
   * @nullable
   */
  depreciationTypeId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use Life.
   * @nullable
   */
  useLife?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * AssetClassLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetClassLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetClassLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetClassLine.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link AssetClassLine.lineNumber} property for query construction.
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
   * Representation of the {@link AssetClassLine.depreciationAreaId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationAreaId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationAreaID',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetClassLine.activeStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeStatus: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ActiveStatus', BoYesNoEnum, true);
  /**
   * Representation of the {@link AssetClassLine.accountDetermination} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountDetermination: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountDetermination',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetClassLine.depreciationTypeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationTypeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationTypeID',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetClassLine.useLife} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useLife: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UseLife', 'Edm.Int32', true);

  /**
   * Creates an instance of AssetClassLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, AssetClassLine, fieldOptions);
  }
}

export namespace AssetClassLine {
  /**
   * Metadata information on all properties of the `AssetClassLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetClassLine>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DepreciationAreaID',
      name: 'depreciationAreaId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ActiveStatus',
      name: 'activeStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AccountDetermination',
      name: 'accountDetermination',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DepreciationTypeID',
      name: 'depreciationTypeId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseLife',
      name: 'useLife',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
