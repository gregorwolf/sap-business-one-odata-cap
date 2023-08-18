/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTransferProcessingStatusEnum } from './EmployeeTransferProcessingStatusEnum';
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
 * EmployeeTransferDetail
 */
export interface EmployeeTransferDetail<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Transfered Date.
   * @nullable
   */
  transferedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Transfered Time.
   * @nullable
   */
  transferedTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Comment.
   * @nullable
   */
  comment?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmployeeTransferDetailField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeTransferDetailField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeTransferDetail,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeTransferDetail.transferId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransferID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeTransferDetail.employeeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeTransferDetail.transferedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransferedDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EmployeeTransferDetail.transferedTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferedTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransferedTime',
    'Edm.TimeOfDay',
    true
  );
  /**
   * Representation of the {@link EmployeeTransferDetail.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    EmployeeTransferProcessingStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    EmployeeTransferProcessingStatusEnum,
    true
  );
  /**
   * Representation of the {@link EmployeeTransferDetail.comment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  comment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true);

  /**
   * Creates an instance of EmployeeTransferDetailField.
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
      EmployeeTransferDetail,
      fieldOptions
    );
  }
}

export namespace EmployeeTransferDetail {
  /**
   * Metadata information on all properties of the `EmployeeTransferDetail` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeTransferDetail>[] = [
    {
      originalName: 'TransferID',
      name: 'transferId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EmployeeID',
      name: 'employeeId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TransferedDate',
      name: 'transferedDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'TransferedTime',
      name: 'transferedTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Comment',
      name: 'comment',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
