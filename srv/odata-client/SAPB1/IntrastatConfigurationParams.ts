/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
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
 * IntrastatConfigurationParams
 */
export interface IntrastatConfigurationParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Conf Type.
   * @nullable
   */
  confType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stat Code.
   * @nullable
   */
  statCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Date To.
   * @nullable
   */
  dateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * IntrastatConfigurationParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class IntrastatConfigurationParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  IntrastatConfigurationParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link IntrastatConfigurationParams.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link IntrastatConfigurationParams.confType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confType: EnumField<
    EntityT,
    DeSerializersT,
    IntrastatConfigurationEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConfType',
    IntrastatConfigurationEnum,
    true
  );
  /**
   * Representation of the {@link IntrastatConfigurationParams.code} property for query construction.
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
   * Representation of the {@link IntrastatConfigurationParams.statCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StatCode', 'Edm.String', true);
  /**
   * Representation of the {@link IntrastatConfigurationParams.dateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link IntrastatConfigurationParams.dateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link IntrastatConfigurationParams.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);

  /**
   * Creates an instance of IntrastatConfigurationParamsField.
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
      IntrastatConfigurationParams,
      fieldOptions
    );
  }
}

export namespace IntrastatConfigurationParams {
  /**
   * Metadata information on all properties of the `IntrastatConfigurationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IntrastatConfigurationParams>[] =
    [
      {
        originalName: 'AbsEntry',
        name: 'absEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ConfType',
        name: 'confType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'StatCode',
        name: 'statCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DateFrom',
        name: 'dateFrom',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'DateTo',
        name: 'dateTo',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Country',
        name: 'country',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
