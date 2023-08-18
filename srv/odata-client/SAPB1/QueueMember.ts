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
 * QueueMember
 */
export interface QueueMember<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Queue Id.
   * @nullable
   */
  queueId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Member User Id.
   * @nullable
   */
  memberUserId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * QueueMemberField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueueMemberField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  QueueMember,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link QueueMember.queueId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queueId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('QueueID', 'Edm.String', true);
  /**
   * Representation of the {@link QueueMember.memberUserId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memberUserId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MemberUserID', 'Edm.Int32', true);

  /**
   * Creates an instance of QueueMemberField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, QueueMember, fieldOptions);
  }
}

export namespace QueueMember {
  /**
   * Metadata information on all properties of the `QueueMember` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<QueueMember>[] = [
    {
      originalName: 'QueueID',
      name: 'queueId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MemberUserID',
      name: 'memberUserId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
