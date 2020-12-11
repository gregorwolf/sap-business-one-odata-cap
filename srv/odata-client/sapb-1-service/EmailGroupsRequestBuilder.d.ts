import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { EmailGroups } from './EmailGroups';
/**
 * Request builder class for operations supported on the [[EmailGroups]] entity.
 */
export declare class EmailGroupsRequestBuilder extends RequestBuilder<EmailGroups> {
    /**
     * Returns a request builder for retrieving one `EmailGroups` entity based on its keys.
     * @param emailGroupCode Key property. See [[EmailGroups.emailGroupCode]].
     * @returns A request builder for creating requests to retrieve one `EmailGroups` entity based on its keys.
     */
    getByKey(emailGroupCode: string): GetByKeyRequestBuilderV4<EmailGroups>;
    /**
     * Returns a request builder for querying all `EmailGroups` entities.
     * @returns A request builder for creating requests to retrieve all `EmailGroups` entities.
     */
    getAll(): GetAllRequestBuilderV4<EmailGroups>;
    /**
     * Returns a request builder for creating a `EmailGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmailGroups`.
     */
    create(entity: EmailGroups): CreateRequestBuilderV4<EmailGroups>;
    /**
     * Returns a request builder for updating an entity of type `EmailGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmailGroups`.
     */
    update(entity: EmailGroups): UpdateRequestBuilderV4<EmailGroups>;
    /**
     * Returns a request builder for deleting an entity of type `EmailGroups`.
     * @param emailGroupCode Key property. See [[EmailGroups.emailGroupCode]].
     * @returns A request builder for creating requests that delete an entity of type `EmailGroups`.
     */
    delete(emailGroupCode: string): DeleteRequestBuilderV4<EmailGroups>;
    /**
     * Returns a request builder for deleting an entity of type `EmailGroups`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmailGroups` by taking the entity as a parameter.
     */
    delete(entity: EmailGroups): DeleteRequestBuilderV4<EmailGroups>;
}
//# sourceMappingURL=EmailGroupsRequestBuilder.d.ts.map