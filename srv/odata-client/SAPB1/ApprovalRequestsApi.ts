/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalRequests } from './ApprovalRequests';
import { ApprovalRequestsRequestBuilder } from './ApprovalRequestsRequestBuilder';
import { ApprovalTemplatesApi } from './ApprovalTemplatesApi';
import { ApprovalStagesApi } from './ApprovalStagesApi';
import { UsersApi } from './UsersApi';
import { ApprovalRequestLine } from './ApprovalRequestLine';
import { ApprovalRequestDecision } from './ApprovalRequestDecision';
import { BoApprovalRequestStatusEnum } from './BoApprovalRequestStatusEnum';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ApprovalRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovalRequests<DeSerializersT>, DeSerializersT>
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
  ): ApprovalRequestsApi<DeSerializersT> {
    return new ApprovalRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link approvalTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_TEMPLATE: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      ApprovalTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvalStage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_STAGE: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      ApprovalStagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApprovalTemplatesApi<DeSerializersT>,
      ApprovalStagesApi<DeSerializersT>,
      UsersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPROVAL_TEMPLATE: new OneToOneLink(
        'ApprovalTemplate',
        this,
        linkedApis[0]
      ),
      APPROVAL_STAGE: new OneToOneLink('ApprovalStage', this, linkedApis[1]),
      USER: new OneToOneLink('User', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ApprovalRequests;

  requestBuilder(): ApprovalRequestsRequestBuilder<DeSerializersT> {
    return new ApprovalRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApprovalRequests<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApprovalRequests, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovalRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPROVAL_TEMPLATES_ID: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OBJECT_TYPE: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DRAFT: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_ENTRY: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS: EnumField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      BoApprovalRequestStatusEnum,
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_STAGE: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORIGINATOR_ID: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    DRAFT_ENTRY: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DRAFT_TYPE: OrderableEdmTypeField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_REQUEST_LINES: CollectionField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      ApprovalRequestLine,
      true,
      true
    >;
    APPROVAL_REQUEST_DECISIONS: CollectionField<
      ApprovalRequests<DeSerializers>,
      DeSerializersT,
      ApprovalRequestDecision,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvalTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_TEMPLATE: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      ApprovalTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvalStage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVAL_STAGE: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      ApprovalStagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ApprovalRequests<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApprovalRequests<DeSerializers>>;
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
         * Static representation of the {@link approvalTemplatesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_TEMPLATES_ID: fieldBuilder.buildEdmTypeField(
          'ApprovalTemplatesID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link objectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDraft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DRAFT: fieldBuilder.buildEdmTypeField('IsDraft', 'Edm.String', true),
        /**
         * Static representation of the {@link objectEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ENTRY: fieldBuilder.buildEdmTypeField(
          'ObjectEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BoApprovalRequestStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link currentStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_STAGE: fieldBuilder.buildEdmTypeField(
          'CurrentStage',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link originatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATOR_ID: fieldBuilder.buildEdmTypeField(
          'OriginatorID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link draftEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAFT_ENTRY: fieldBuilder.buildEdmTypeField(
          'DraftEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link draftType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAFT_TYPE: fieldBuilder.buildEdmTypeField(
          'DraftType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalRequestLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_REQUEST_LINES: fieldBuilder.buildCollectionField(
          'ApprovalRequestLines',
          ApprovalRequestLine,
          true
        ),
        /**
         * Static representation of the {@link approvalRequestDecisions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_REQUEST_DECISIONS: fieldBuilder.buildCollectionField(
          'ApprovalRequestDecisions',
          ApprovalRequestDecision,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalRequests)
      };
    }

    return this._schema;
  }
}
