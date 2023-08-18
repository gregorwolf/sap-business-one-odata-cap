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
 * ApprovalRequestDecision
 */
export interface ApprovalRequestDecision<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Approver User Name.
   * @nullable
   */
  approverUserName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Approver Password.
   * @nullable
   */
  approverPassword?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
}

/**
 * ApprovalRequestDecisionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalRequestDecisionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ApprovalRequestDecision,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ApprovalRequestDecision.approverUserName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approverUserName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ApproverUserName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ApprovalRequestDecision.approverPassword} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approverPassword: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ApproverPassword',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ApprovalRequestDecision.status} property for query construction.
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
   * Representation of the {@link ApprovalRequestDecision.remarks} property for query construction.
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
   * Creates an instance of ApprovalRequestDecisionField.
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
      ApprovalRequestDecision,
      fieldOptions
    );
  }
}

export namespace ApprovalRequestDecision {
  /**
   * Metadata information on all properties of the `ApprovalRequestDecision` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalRequestDecision>[] =
    [
      {
        originalName: 'ApproverUserName',
        name: 'approverUserName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ApproverPassword',
        name: 'approverPassword',
        type: 'Edm.String',
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
      }
    ];
}
