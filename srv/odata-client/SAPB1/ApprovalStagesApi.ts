/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalStages } from './ApprovalStages';
import { ApprovalStagesRequestBuilder } from './ApprovalStagesRequestBuilder';
import { ApprovalRequestsApi } from './ApprovalRequestsApi';
import { ApprovalStageApprover } from './ApprovalStageApprover';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ApprovalStagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovalStages<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ApprovalStagesApi<DeSerializersT> {
    return new ApprovalStagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      ApprovalStages<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ApprovalRequestsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      APPROVAL_REQUESTS: new OneToManyLink(
        'ApprovalRequests',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ApprovalStages;

  requestBuilder(): ApprovalStagesRequestBuilder<DeSerializersT> {
    return new ApprovalStagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalStages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApprovalStages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApprovalStages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApprovalStages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ApprovalStages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApprovalStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NO_OF_APPROVERS_REQUIRED: OrderableEdmTypeField<
      ApprovalStages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ApprovalStages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STAGE_APPROVERS: CollectionField<
      ApprovalStages<DeSerializers>,
      DeSerializersT,
      ApprovalStageApprover,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link approvalRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_REQUESTS: OneToManyLink<
      ApprovalStages<DeSerializersT>,
      DeSerializersT,
      ApprovalRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApprovalStages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link noOfApproversRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_OF_APPROVERS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'NoOfApproversRequired',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link approvalStageApprovers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STAGE_APPROVERS: fieldBuilder.buildCollectionField(
          'ApprovalStageApprovers',
          ApprovalStageApprover,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalStages)
      };
    }

    return this._schema;
  }
}
