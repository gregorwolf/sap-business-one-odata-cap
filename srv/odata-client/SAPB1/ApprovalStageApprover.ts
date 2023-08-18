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
 * ApprovalStageApprover
 */
export interface ApprovalStageApprover<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ApprovalStageApproverField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalStageApproverField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalStageApprover,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalStageApprover.userId} property for query construction.
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
   * Creates an instance of ApprovalStageApproverField.
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
      ApprovalStageApprover,
      fieldOptions
    );
  }
}

export namespace ApprovalStageApprover {
  /**
   * Metadata information on all properties of the `ApprovalStageApprover` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalStageApprover>[] = [
    {
      originalName: 'UserID',
      name: 'userId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
