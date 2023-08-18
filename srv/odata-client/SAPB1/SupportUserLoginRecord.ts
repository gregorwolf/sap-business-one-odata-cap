/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupportUserLoginRecordLogReasonTypeEnum } from './SupportUserLoginRecordLogReasonTypeEnum';
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
 * SupportUserLoginRecord
 */
export interface SupportUserLoginRecord<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Real Name.
   * @nullable
   */
  realName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Reason.
   * @nullable
   */
  logReason?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Log Detail.
   * @nullable
   */
  logDetail?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SupportUserLoginRecordField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SupportUserLoginRecordField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SupportUserLoginRecord,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SupportUserLoginRecord.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Int32', true, false> =
    this._fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', true);
  /**
   * Representation of the {@link SupportUserLoginRecord.realName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  realName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RealName', 'Edm.String', true);
  /**
   * Representation of the {@link SupportUserLoginRecord.logReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logReason: EnumField<
    EntityT,
    DeSerializersT,
    SupportUserLoginRecordLogReasonTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'LogReason',
    SupportUserLoginRecordLogReasonTypeEnum,
    true
  );
  /**
   * Representation of the {@link SupportUserLoginRecord.logDetail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logDetail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogDetail', 'Edm.String', true);

  /**
   * Creates an instance of SupportUserLoginRecordField.
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
      SupportUserLoginRecord,
      fieldOptions
    );
  }
}

export namespace SupportUserLoginRecord {
  /**
   * Metadata information on all properties of the `SupportUserLoginRecord` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SupportUserLoginRecord>[] = [
    {
      originalName: 'ID',
      name: 'id',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RealName',
      name: 'realName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogReason',
      name: 'logReason',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LogDetail',
      name: 'logDetail',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
