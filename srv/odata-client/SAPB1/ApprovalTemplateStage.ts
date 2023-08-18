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
 * ApprovalTemplateStage
 */
export interface ApprovalTemplateStage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sort Id.
   * @nullable
   */
  sortId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Approval Stage Code.
   * @nullable
   */
  approvalStageCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ApprovalTemplateStageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateStageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalTemplateStage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalTemplateStage.sortId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SortID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ApprovalTemplateStage.approvalStageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalStageCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ApprovalStageCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ApprovalTemplateStage.remarks} property for query construction.
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
   * Creates an instance of ApprovalTemplateStageField.
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
      ApprovalTemplateStage,
      fieldOptions
    );
  }
}

export namespace ApprovalTemplateStage {
  /**
   * Metadata information on all properties of the `ApprovalTemplateStage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateStage>[] = [
    {
      originalName: 'SortID',
      name: 'sortId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ApprovalStageCode',
      name: 'approvalStageCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
