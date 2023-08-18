/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
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
 * EcmActionStatusData
 */
export interface EcmActionStatusData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Act Status.
   * @nullable
   */
  actStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Report Id.
   * @nullable
   */
  reportId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Receiv Date.
   * @nullable
   */
  receivDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Act Message.
   * @nullable
   */
  actMessage?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EcmActionStatusDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionStatusDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EcmActionStatusData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EcmActionStatusData.absEntry} property for query construction.
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
   * Representation of the {@link EcmActionStatusData.actStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actStatus: EnumField<
    EntityT,
    DeSerializersT,
    EcmActionStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ActStatus', EcmActionStatusEnum, true);
  /**
   * Representation of the {@link EcmActionStatusData.reportId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReportID', 'Edm.String', true);
  /**
   * Representation of the {@link EcmActionStatusData.receivDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReceivDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EcmActionStatusData.actMessage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actMessage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActMessage', 'Edm.String', true);

  /**
   * Creates an instance of EcmActionStatusDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EcmActionStatusData, fieldOptions);
  }
}

export namespace EcmActionStatusData {
  /**
   * Metadata information on all properties of the `EcmActionStatusData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionStatusData>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ActStatus',
      name: 'actStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ReportID',
      name: 'reportId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReceivDate',
      name: 'receivDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ActMessage',
      name: 'actMessage',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
