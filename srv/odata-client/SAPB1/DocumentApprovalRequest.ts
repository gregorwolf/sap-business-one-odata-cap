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
 * DocumentApprovalRequest
 */
export interface DocumentApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Approval Templates Id.
   * @nullable
   */
  approvalTemplatesId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Approval Templates Name.
   * @nullable
   */
  approvalTemplatesName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Active For Update.
   * @nullable
   */
  activeForUpdate?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * DocumentApprovalRequestField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentApprovalRequestField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentApprovalRequest,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocumentApprovalRequest.approvalTemplatesId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ApprovalTemplatesID',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link DocumentApprovalRequest.remarks} property for query construction.
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
   * Representation of the {@link DocumentApprovalRequest.approvalTemplatesName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvalTemplatesName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ApprovalTemplatesName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DocumentApprovalRequest.activeForUpdate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeForUpdate: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ActiveForUpdate', BoYesNoEnum, true);

  /**
   * Creates an instance of DocumentApprovalRequestField.
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
      DocumentApprovalRequest,
      fieldOptions
    );
  }
}

export namespace DocumentApprovalRequest {
  /**
   * Metadata information on all properties of the `DocumentApprovalRequest` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentApprovalRequest>[] =
    [
      {
        originalName: 'ApprovalTemplatesID',
        name: 'approvalTemplatesId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Remarks',
        name: 'remarks',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ApprovalTemplatesName',
        name: 'approvalTemplatesName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ActiveForUpdate',
        name: 'activeForUpdate',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}