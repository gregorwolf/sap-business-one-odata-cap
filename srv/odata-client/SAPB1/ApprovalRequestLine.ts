/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoApprovalRequestDecisionEnum } from './BoApprovalRequestDecisionEnum';
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
 * ApprovalRequestLine
 */
export interface ApprovalRequestLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Stage Code.
   * @nullable
   */
  stageCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
}

/**
 * ApprovalRequestLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalRequestLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalRequestLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalRequestLine.stageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ApprovalRequestLine.userId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ApprovalRequestLine.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    BoApprovalRequestDecisionEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    BoApprovalRequestDecisionEnum,
    true
  );
  /**
   * Representation of the {@link ApprovalRequestLine.remarks} property for query construction.
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
   * Representation of the {@link ApprovalRequestLine.updateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ApprovalRequestLine.updateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UpdateTime', 'Edm.TimeOfDay', true);
  /**
   * Representation of the {@link ApprovalRequestLine.creationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ApprovalRequestLine.creationTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreationTime',
    'Edm.TimeOfDay',
    true
  );

  /**
   * Creates an instance of ApprovalRequestLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ApprovalRequestLine, fieldOptions);
  }
}

export namespace ApprovalRequestLine {
  /**
   * Metadata information on all properties of the `ApprovalRequestLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalRequestLine>[] = [
    {
      originalName: 'StageCode',
      name: 'stageCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UserID',
      name: 'userId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UpdateDate',
      name: 'updateDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UpdateTime',
      name: 'updateTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    },
    {
      originalName: 'CreationDate',
      name: 'creationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreationTime',
      name: 'creationTime',
      type: 'Edm.TimeOfDay',
      isCollection: false
    }
  ];
}
